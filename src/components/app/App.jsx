import { Layout } from "../layout/Layout";
import Restaurants from "../restaurants/Restaurants";

export const App = () => {
  return (
    <Layout sidebar={<div>sidebar</div>}>
      <Restaurants />
    </Layout>
  );
};
