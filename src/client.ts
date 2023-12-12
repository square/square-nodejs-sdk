import { ApplePayApi } from './api/applePayApi';
import { BankAccountsApi } from './api/bankAccountsApi';
import { BookingCustomAttributesApi } from './api/bookingCustomAttributesApi';
import { BookingsApi } from './api/bookingsApi';
import { CardsApi } from './api/cardsApi';
import { CashDrawersApi } from './api/cashDrawersApi';
import { CatalogApi } from './api/catalogApi';
import { CheckoutApi } from './api/checkoutApi';
import { CustomerCustomAttributesApi } from './api/customerCustomAttributesApi';
import { CustomerGroupsApi } from './api/customerGroupsApi';
import { CustomersApi } from './api/customersApi';
import { CustomerSegmentsApi } from './api/customerSegmentsApi';
import { DevicesApi } from './api/devicesApi';
import { DisputesApi } from './api/disputesApi';
import { EmployeesApi } from './api/employeesApi';
import { GiftCardActivitiesApi } from './api/giftCardActivitiesApi';
import { GiftCardsApi } from './api/giftCardsApi';
import { InventoryApi } from './api/inventoryApi';
import { InvoicesApi } from './api/invoicesApi';
import { LaborApi } from './api/laborApi';
import { LocationCustomAttributesApi } from './api/locationCustomAttributesApi';
import { LocationsApi } from './api/locationsApi';
import { LoyaltyApi } from './api/loyaltyApi';
import { MerchantCustomAttributesApi } from './api/merchantCustomAttributesApi';
import { MerchantsApi } from './api/merchantsApi';
import { MobileAuthorizationApi } from './api/mobileAuthorizationApi';
import { OAuthApi } from './api/oAuthApi';
import { OrderCustomAttributesApi } from './api/orderCustomAttributesApi';
import { OrdersApi } from './api/ordersApi';
import { PaymentsApi } from './api/paymentsApi';
import { PayoutsApi } from './api/payoutsApi';
import { RefundsApi } from './api/refundsApi';
import { SitesApi } from './api/sitesApi';
import { SnippetsApi } from './api/snippetsApi';
import { SubscriptionsApi } from './api/subscriptionsApi';
import { TeamApi } from './api/teamApi';
import { TerminalApi } from './api/terminalApi';
import { TransactionsApi } from './api/transactionsApi';
import { V1TransactionsApi } from './api/v1TransactionsApi';
import { VendorsApi } from './api/vendorsApi';
import { WebhookSubscriptionsApi } from './api/webhookSubscriptionsApi';
import { accessTokenAuthenticationProvider } from './authentication';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './errors/apiError';
import { assertHeaders, mergeHeaders } from './core';
import { pathTemplate, SkipEncode } from './core';
import { setHeader } from './core';
import { updateUserAgent } from './core';
import {
  AbortError,
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
  RetryConfiguration,
} from './core';
 import { HttpClient } from './clientAdapter';

/** Current SDK version */
export const SDK_VERSION = '33.1.0';
export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;
  private _userAgent: string;

  public readonly applePayApi: ApplePayApi;
  public readonly bankAccountsApi: BankAccountsApi;
  public readonly bookingCustomAttributesApi: BookingCustomAttributesApi;
  public readonly bookingsApi: BookingsApi;
  public readonly cardsApi: CardsApi;
  public readonly cashDrawersApi: CashDrawersApi;
  public readonly catalogApi: CatalogApi;
  public readonly checkoutApi: CheckoutApi;
  public readonly customerCustomAttributesApi: CustomerCustomAttributesApi;
  public readonly customerGroupsApi: CustomerGroupsApi;
  public readonly customersApi: CustomersApi;
  public readonly customerSegmentsApi: CustomerSegmentsApi;
  public readonly devicesApi: DevicesApi;
  public readonly disputesApi: DisputesApi;
  public readonly employeesApi: EmployeesApi;
  public readonly giftCardActivitiesApi: GiftCardActivitiesApi;
  public readonly giftCardsApi: GiftCardsApi;
  public readonly inventoryApi: InventoryApi;
  public readonly invoicesApi: InvoicesApi;
  public readonly laborApi: LaborApi;
  public readonly locationCustomAttributesApi: LocationCustomAttributesApi;
  public readonly locationsApi: LocationsApi;
  public readonly loyaltyApi: LoyaltyApi;
  public readonly merchantCustomAttributesApi: MerchantCustomAttributesApi;
  public readonly merchantsApi: MerchantsApi;
  public readonly mobileAuthorizationApi: MobileAuthorizationApi;
  public readonly oAuthApi: OAuthApi;
  public readonly orderCustomAttributesApi: OrderCustomAttributesApi;
  public readonly ordersApi: OrdersApi;
  public readonly paymentsApi: PaymentsApi;
  public readonly payoutsApi: PayoutsApi;
  public readonly refundsApi: RefundsApi;
  public readonly sitesApi: SitesApi;
  public readonly snippetsApi: SnippetsApi;
  public readonly subscriptionsApi: SubscriptionsApi;
  public readonly teamApi: TeamApi;
  public readonly terminalApi: TerminalApi;
  public readonly transactionsApi: TransactionsApi;
  public readonly v1TransactionsApi: V1TransactionsApi;
  public readonly vendorsApi: VendorsApi;
  public readonly webhookSubscriptionsApi: WebhookSubscriptionsApi;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    this._userAgent = updateUserAgent(
      'Square-TypeScript-SDK/33.1.0 ({api-version}) {engine}/{engine-version} ({os-info}) {detail}',
      this._config.squareVersion,
      this._config.userAgentDetail
    );
    this._requestBuilderFactory = createRequestHandlerFactory(
      server => getBaseUri(server, this._config),
      accessTokenAuthenticationProvider(this._config),
      new HttpClient(AbortError, {
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [
        withErrorHandlers,
        withUserAgent(this._userAgent),
        withAdditionalHeaders(this._config),
        withAuthenticationByDefault,
        withSquareVersion(this._config),
      ],
      this._retryConfig
    );

    this.applePayApi = new ApplePayApi(this);
    this.bankAccountsApi = new BankAccountsApi(this);
    this.bookingCustomAttributesApi = new BookingCustomAttributesApi(this);
    this.bookingsApi = new BookingsApi(this);
    this.cardsApi = new CardsApi(this);
    this.cashDrawersApi = new CashDrawersApi(this);
    this.catalogApi = new CatalogApi(this);
    this.checkoutApi = new CheckoutApi(this);
    this.customerCustomAttributesApi = new CustomerCustomAttributesApi(this);
    this.customerGroupsApi = new CustomerGroupsApi(this);
    this.customersApi = new CustomersApi(this);
    this.customerSegmentsApi = new CustomerSegmentsApi(this);
    this.devicesApi = new DevicesApi(this);
    this.disputesApi = new DisputesApi(this);
    this.employeesApi = new EmployeesApi(this);
    this.giftCardActivitiesApi = new GiftCardActivitiesApi(this);
    this.giftCardsApi = new GiftCardsApi(this);
    this.inventoryApi = new InventoryApi(this);
    this.invoicesApi = new InvoicesApi(this);
    this.laborApi = new LaborApi(this);
    this.locationCustomAttributesApi = new LocationCustomAttributesApi(this);
    this.locationsApi = new LocationsApi(this);
    this.loyaltyApi = new LoyaltyApi(this);
    this.merchantCustomAttributesApi = new MerchantCustomAttributesApi(this);
    this.merchantsApi = new MerchantsApi(this);
    this.mobileAuthorizationApi = new MobileAuthorizationApi(this);
    this.oAuthApi = new OAuthApi(this);
    this.orderCustomAttributesApi = new OrderCustomAttributesApi(this);
    this.ordersApi = new OrdersApi(this);
    this.paymentsApi = new PaymentsApi(this);
    this.payoutsApi = new PayoutsApi(this);
    this.refundsApi = new RefundsApi(this);
    this.sitesApi = new SitesApi(this);
    this.snippetsApi = new SnippetsApi(this);
    this.subscriptionsApi = new SubscriptionsApi(this);
    this.teamApi = new TeamApi(this);
    this.terminalApi = new TerminalApi(this);
    this.transactionsApi = new TransactionsApi(this);
    this.v1TransactionsApi = new V1TransactionsApi(this);
    this.vendorsApi = new VendorsApi(this);
    this.webhookSubscriptionsApi = new WebhookSubscriptionsApi(this);
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(server: Server = 'default', config: Configuration): string {
  if (config.environment === Environment.Production) {
    if (server === 'default') {
      return 'https://connect.squareup.com';
    }
  }
  if (config.environment === Environment.Sandbox) {
    if (server === 'default') {
      return 'https://connect.squareupsandbox.com';
    }
  }
  if (config.environment === Environment.Custom) {
    if (server === 'default') {
      return pathTemplate`${new SkipEncode(config.customUrl)}`;
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach(c => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withAdditionalHeaders({
  additionalHeaders,
}: {
  additionalHeaders: Readonly<Record<string, string>>;
}) {
  const clone = { ...additionalHeaders };
  assertHeaders(clone);
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      mergeHeaders(headers, clone);
      return { ...request, headers };
    });
  };
}

function withUserAgent(userAgent: string) {
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      setHeader(headers, 'user-agent', userAgent);
      return { ...request, headers };
    });
  };
}

function withSquareVersion({ squareVersion }: { squareVersion: string }) {
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest(request => {
      const headers = request.headers ?? {};
      setHeader(headers, 'Square-Version', squareVersion);
      return { ...request, headers };
    });
  };
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate(true);
}
