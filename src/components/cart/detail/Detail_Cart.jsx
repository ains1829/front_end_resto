import { useParams } from "react-router-dom"
import Sweet_noir from "/image/FAM3718_W000_MEDIUM.jpg";
function Detail_Cart() {
  const { id } = useParams()
  console.log('Fetching data with id : ' + id)
  return (
    <>
      <div className="detail-cart">
        <div className="content-img">
          <img src={Sweet_noir} alt="coco..." />
        </div>
        <div className="content-detail">
          <div className="about-product">
            <span className="name">Sweet Noir Homme</span>
            <div className="evaluation">
              <label htmlFor="eval">Evaluation</label>
              <span>4.2 sur 5</span>
            </div>
            <div className="offre-price">
              <span className="price">$60.20</span>
              <span className="offre">Payez en 4 fois des $75 d'achats</span>
            </div>
            <div className="taille">
              <label htmlFor="select-taille">Taille</label>
              <select id="select-taille">
                <option value="1">XL</option>
                <option value="2">XXL</option>
              </select>
            </div>
            <div className="product-detail">
              <label>Detail du produit</label>
              <span className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi asperiores laborum, hic eveniet ipsum, est voluptatum, non corporis alias sed debitis quas vero. Temporibus pariatur repellendus quas itaque facere officia.</span>
            </div>
          </div>
          <div className="content-add-cart">
            <span className="sponsor">Sponsoriser</span>
            <span className="price">$60.20</span>
              <span className="error">
                Cet article ne peut pas etre livre a l'adresse selectionnee . Veuillez choisir une adresse differenete
              </span>
              <span className="addresse">Votre addresse de livraison: Madagascar</span>
            <span className="stock"> 
              Il ne reste plus que 20 exemplaire dans le stock
            </span>
            <span className="about">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sapiente praesentium tempore asperiores commodi. Quia autem unde dignissimos laborum placeat, voluptatem mollitia. Obcaeca Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt corporis quae. Ipsam odio eum nihil neque que
            </span>
            <span className="button add-cart">Ajouter au panier</span>
            <span className="button pay-cart">Acheter cette article</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail_Cart