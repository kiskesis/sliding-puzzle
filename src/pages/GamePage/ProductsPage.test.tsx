import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsPage from './ProductsPage';

test('renders learn react link', () => {
  render(<ProductsPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import React from "react";
// import { render, waitFor } from "@testing-library/react";
// import { Product, Article, Sale, RawArticle } from "../../common/types";
// import GamePage from "./GamePage";
// import * as ProductService from "../../services/ProductService";
// import * as SaleService from "../../services/SaleService";
// import * as ArticleService from "../../services/ArticleService";
//
// jest.mock("../../services/ProductService");
// jest.mock("../../services/SaleService");
// jest.mock("../../services/ArticleService");
//
// const products: Product[] = [
//   {
//     id: "1",
//     name: "Kallax Shelf",
//     articles: [
//       {
//         "id": "0517f083-0e15-4876-8d1f-6fa45900431c",
//         "amountRequired": 4
//       }, {
//         "id": "831b92b8-677b-42cc-a585-335ea4ccccb6",
//         "amountRequired": 1
//       },
//       { "id": "addc65a8-c759-41d8-a18a-89fe446ad484", "amountRequired": 8 }
//     ],
//   },
//   {
//     id: "2",
//     name: "Billy Bookcase",
//     articles: [{  }],
//   },
// ];
//
// const articles: RawArticle[] = [
//   {
//     id: "1",
//     name: "Screw",
//     amountInStock: 100,
//   },
//   {
//     id: "2",
//     name: "Patched Screw",
//     amountInStock: 20,
//   },
//   {
//     id: "3",
//     name: "Nail",
//     amountInStock: 200,
//   },
//   {
//     id: "4",
//     name: "Hex Key",
//     amountInStock: 30,
//   },
// ];
//
// const sales: Sale[] = [
//   {
//     id: "1",
//     productId: "1",
//     amountSold: "5",
//   },
//   {
//     id: "2",
//     productId: "2",
//     amountSold: "2",
//   },
// ];
//
// const mockedGetProducts = ProductService.getProducts as jest.MockedFunction<typeof ProductService.getProducts>;
// const mockedGetArticles = ArticleService.getArticles as jest.MockedFunction<typeof ArticleService.getArticles>;
// const mockedGetSales = SaleService.getSales as jest.MockedFunction<typeof SaleService.getSales>;
// const mockedUpdateArticles = ArticleService.updateArticles as jest.MockedFunction<typeof ArticleService.updateArticles>;
//
// describe("<GamePage />", () => {
//   beforeEach(() => {
//     mockedGetProducts.mockResolvedValue(products);
//     mockedGetArticles.mockResolvedValue(articles);
//     mockedGetSales.mockResolvedValue(sales);
//     mockedUpdateArticles.mockResolvedValue();
//   });
//
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//
//   it("should display products and articles", async () => {
//     const { getByText } = render(<GamePage />);
//
//     await waitFor(() => {
//       expect(getByText("Kallax Shelf")).toBeInTheDocument();
//       expect(getByText("Billy Bookcase")).toBeInTheDocument();
//     })
//   });
// });