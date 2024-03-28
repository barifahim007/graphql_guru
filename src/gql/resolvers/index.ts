import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find(
        (product) => product.id === args.productId
      );
      return result;
    },
    categories: () => db.categories,
    category: (parent, args, context) => {
      const result = db.categories.find(
        (category) => category.id === args.categoryId
      );
      return result;
    },
    reviews: () => db.reviews,
    review: (parent, args, context) => {
      const result = db.reviews.find((review) => review.id === args.reviewId);
      return result;
    },
  },
  Product: {
    categoryId: (parent, args, context) => {
      const result = db.categories.find(
        (cate) => cate.id === parent.categoryId
      );
      return result;
    },
    reviews: (parent, args, context) => {
      const result = db.reviews.filter(
        (review) => review.productId === parent.id
      );
      console.log(result);
      return result;
    },
  },

  Category: {
    productId: (parent, args, context) => {
      const result = db.products.filter(
        (product) => product.categoryId === parent.id
      );
      return result;
    },
  },
};
