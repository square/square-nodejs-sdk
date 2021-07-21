import { object, optional, Schema, string } from '../schema';

/** The tax IDs that a Location is operating under. */
export interface TaxIds {
  /**
   * The EU VAT number for this location. For example, "IE3426675K".
   * If the EU VAT number is present, it is well-formed and has been
   * validated with VIES, the VAT Information Exchange System.
   */
  euVat?: string;
  /**
   * The SIRET (Système d'Identification du Répertoire des Entreprises et de leurs Etablissements)
   * number is a 14 digits code issued by the French INSEE. For example, "39922799000021".
   */
  frSiret?: string;
  /**
   * The French government uses the NAF (Nomenclature des Activités Françaises) to display and
   * track economic statistical data. This is also called the APE (Activite Principale de l’Entreprise) code.
   * For example, 6910Z.
   */
  frNaf?: string;
}

export const taxIdsSchema: Schema<TaxIds> = object({
  euVat: ['eu_vat', optional(string())],
  frSiret: ['fr_siret', optional(string())],
  frNaf: ['fr_naf', optional(string())],
});
