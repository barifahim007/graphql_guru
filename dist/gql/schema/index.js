export const typeDefs = `#graphql
    
  type Product {
      id: ID!
      name: String
      image: String
      description: String
      price: Float
      quantity: Int
      onStock: Boolean
      categoryId: Category
      reviews: [Review] 
  },
  type Category {

    id : ID!
    name: String
    productId: [Product]
  },
  type Review {
    id: ID!
    review: String 
    rating: Float
    date: String
    productId: String  }

  type Query {
    products: [Product]
    product(productId : ID!): Product
    categories: [Category]
    category(categoryId: ID!):Category
    reviews: [Review]
    review(reviewId: ID!):Review
  }
`;
