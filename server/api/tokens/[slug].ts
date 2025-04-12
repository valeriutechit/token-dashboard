export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  const mock = {
    bitcoin: { price: 69000, volume: 300000000, holders: 1_500_000 },
    ethereum: { price: 3500, volume: 200000000, holders: 1_200_000 }
  }

  const data = mock[slug as keyof typeof mock];

  if (!data) {
    throw createError({ statusCode: 404, statusMessage: 'Token not found' })
  }

  return data;
})