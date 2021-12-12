import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ISearchProduct } from "../types";

const ProductsListPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { products, last_page } = useTypedSelector((store) => store.products);
  const { fetchProducts } = useActions();

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
    const search: ISearchProduct = {
      page: 1,
    };
    getProducts(search);
  }, []);

  return (
    <>
      <h1 className="text-center">Товари</h1>
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
    </>
  );
};

export default ProductsListPage;
