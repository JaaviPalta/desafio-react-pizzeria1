import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardPizza
              nombre="Napolitana"
              precio={5950}
              ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardPizza
              nombre="Española"
              precio={6950}
              ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardPizza
              nombre="Pepperoni"
              precio={6950}
              ingredientes={["mozzarella", "pepperoni", "orégano"]}
              img="https://aperitivo.cl/wp-content/uploads/2022/04/pizza-peperoni.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
