import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ISearchProduct } from "../types";
import { useNavigate } from "react-router";

const ProductsListPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { products, last_page, current_page, total } = useTypedSelector(
    (store) => store.products
  );
  const { fetchProducts } = useActions();

  const [name, setName] = useState<string>("");
  const navigator = useNavigate();
  const [query, setQuery] = useState<string>(window.location.search);

  async function getProducts(search: ISearchProduct) {
    setLoading(true);
    try {
      await fetchProducts(search);
      setLoading(false);
    } catch (ex) {
      setLoading(false);
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(query);
    const name = params?.get("name") ?? "";
    setName(name);
    const search: ISearchProduct = {
      page: params?.get("page") ?? 1,
      name: name,
    };
    getProducts(search);
  }, [query]);

  const pages = [];
  for (let i = 1; i <= last_page; i++) {
    pages.push(i);
  }

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const name = (document.getElementById("search") as HTMLInputElement).value;
    console.log("search", name);
    setQuery("?name=" + name);
    navigator("?name=" + name);
  };

  return (
    <>
      <h1 className="text-center">Товари</h1>
      <form className="d-flex" onSubmit={onHandleSubmit}>
        <input
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {loading && <h2>Loading ...</h2>}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.detail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h4>Всього записів: {total}</h4>
      <hr />

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page, key) => {
            const url = "?page=" + page + "&name=" + name;
            return (
              <li
                className={classNames("page-item", {
                  active: current_page == page,
                })}
                key={key}
              >
                <Link
                  className="page-link"
                  to={url}
                  onClick={() => {
                    setQuery(url);
                  }}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default ProductsListPage;
