import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const gotoProducts = () => {
    alert(" do somethig");
    navigate("/ProductList");
  };
  return (
    <>
      <h1 className="text-center">this is AboutUs Component</h1>
      <div className="">
        <button className="btn btn-warning">
          <Link className="text-black" to="/ProductList">
            Go to Products
          </Link>
        </button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={gotoProducts}>
          Do Something and go to Products
        </button>

        <button
          className="btn btn-primary m-1"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          Go Back
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate(+1);
          }}
        >
          {" "}
          Go Next
        </button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, voluptatem inventore! Eius repudiandae unde nostrum eum aspernatur nisi et in quo consectetur. Fugiat, totam? Rerum voluptates impedit vel cupiditate optio dolore maiores quia, odit et voluptatum natus inventore corrupti sapiente dicta. Quis adipisci aspernatur, obcaecati, ipsa eius architecto laudantium est, laboriosam illum ullam doloribus maiores quidem dolorum accusantium. Perspiciatis vero unde, iusto necessitatibus facilis alias velit vel delectus nesciunt placeat, est, ducimus eligendi nostrum eum magni voluptates dignissimos. Blanditiis nulla dolorem quas neque? Reprehenderit doloribus atque ipsum. Est officiis praesentium reprehenderit, consequatur soluta tempora voluptatibus repellat a blanditiis consequuntur aliquam corporis aut voluptas id facilis accusantium nostrum eveniet sapiente quam? Itaque harum accusantium rem quas eveniet inventore voluptatibus dolorem ducimus aperiam sed fuga autem quisquam, voluptates corrupti ullam libero, error nam consequuntur esse sunt quo quae! Ipsa ea commodi temporibus aliquid voluptatem quaerat, possimus animi quia harum laboriosam doloribus dolore distinctio debitis consectetur deleniti sed illum reiciendis? Nobis doloribus architecto officiis amet totam veniam fugit, modi repellendus enim repudiandae, assumenda eum culpa quo earum asperiores harum molestiae eligendi expedita sint perferendis, pariatur qui nostrum aliquam? Similique, magni? Eligendi doloribus officia aliquid omnis doloremque quam accusantium possimus, numquam nostrum harum vero veritatis nihil earum, suscipit quia sint. Sit natus voluptatibus eveniet in fugiat molestiae, reprehenderit aliquid ratione nam velit fuga delectus veritatis incidunt illum dolorem dolores possimus repellat eum unde totam iste nostrum exercitationem blanditiis quas. Quod voluptatum qui necessitatibus, vitae quidem optio eaque voluptas repudiandae eveniet quam, adipisci et temporibus mollitia, maxime aspernatur cumque illo veritatis reprehenderit sapiente nesciunt! Maxime, beatae. Repellendus, consectetur enim? Sapiente, quos incidunt? Facere exercitationem eveniet, tempora porro tenetur atque fuga aliquam, doloribus harum veniam minus aperiam omnis, earum dolorem praesentium? Dolorum, voluptatibus laborum! Maxime obcaecati voluptates reiciendis soluta quaerat praesentium illum inventore repellendus possimus quae?</p>
      </div>
    </>
  );
}
