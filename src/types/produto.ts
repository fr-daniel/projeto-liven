type Rating = {
  count: number,
  rate: number,
}

type Produto = {
  id: number,
  title: string,
  price: number,
  rating: Rating,
  category: string,
  description: string,
  image: string,
}


export default Produto;
