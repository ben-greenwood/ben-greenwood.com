import axios from "axios"

const opensea = async (_, res) => {
  try {
    const { data } = await axios.get(
      "https://api.opensea.io/api/v1/collection/doodles-official"
    )

    // https://api.opensea.io/api/v1/assets?order_direction=desc&limit=20&include_orders=false

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export default opensea
