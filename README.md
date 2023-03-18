# Books Store

This is a sample website for a books store, built with React TypeScript, for practicing Redux Toolkit and fetching data from a third-party API. It includes the following features:

## Demo
![Screenshot 2023-03-18 at 8 23 10 PM](https://user-images.githubusercontent.com/68791488/226126782-256037db-d4bb-4848-8d8f-f5fb39b075fc.png)

![Screenshot 2023-03-18 at 8 07 18 PM](https://user-images.githubusercontent.com/68791488/226126706-42f66dcb-f771-4f65-ab1b-592bf78e6352.png)

## Features
### Add Book
- Users can add a new book to the book store by filling out the book information in the form and clicking "Add Book". The new book will be added to the list of books and persisted to the fake JSON server.

### Delete Book
- Users can delete a book from the book store by clicking the "Delete" button next to the book they want to remove. The book will be removed from the list of books and deleted from the fake JSON server.

### Read Book Info
- Users can click on "Delete" button next to the book to view more information about the book, including the author, title, description and price.

## Tools
- APIs using Axios
- `dispatch` and `useSelector` hooks from Redux Toolkit
- `AsyncThunkAction`, `extraReducers`, `reducers`, and `createSlice` from Redux Toolkit
- Multi reducers
- Fake JSON server

## Installation & Usage
- Clone the repository: git clone https://github.com/your-username/book-store-app.git
- Install dependencies & run:
```
Frontend
$ cd client
$ npm install
$ npm start

Server
$ cd app-json-server
$ npm install
$ npm start

```
