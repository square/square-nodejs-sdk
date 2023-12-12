import { nullable, object, optional, Schema, string } from '../schema';

/** A node in the path from a retrieved category to its root node. */
export interface CategoryPathToRootNode {
  /** The category's ID. */
  categoryId?: string | null;
  /** The category's name. */
  categoryName?: string | null;
}

export const categoryPathToRootNodeSchema: Schema<CategoryPathToRootNode> = object(
  {
    categoryId: ['category_id', optional(nullable(string()))],
    categoryName: ['category_name', optional(nullable(string()))],
  }
);
