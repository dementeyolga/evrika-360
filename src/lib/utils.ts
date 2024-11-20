export const createBitrixLink = (formValues: {
  name: string
  post: string
  phone: string
}): string => {
  const searchParams = new URLSearchParams(location.search)

  const utmTerm = searchParams.get('utm_term') ?? ''
  const utmSource = searchParams.get('utm_source') ?? ''
  const utmMedium = searchParams.get('utm_medium') ?? ''
  const utmCampaign = searchParams.get('utm_campaign') ?? ''
  const utmContent = searchParams.get('utm_content') ?? ''

  const link = `https://sanq.bitrix24.by/rest/902/ga7jftrinp89adxe/crm.lead.add?fields[NAME]=${formValues.name}&fields[POST]=${formValues.post}&fields[PHONE][0][VALUE]=${formValues.phone}&fields[PHONE][0][VALUE_TYPE]=MOBILE&fields[UTM_TERM]=${utmTerm}&fields[UTM_SOURCE]=${utmSource}&fields[UTM_MEDIUM]=${utmMedium}&fields[UTM_CAMPAIGN]=${utmCampaign}&fields[UTM_CONTENT]=${utmContent}&fields[SOURCE_ID]=UC_5P0S1B&fields[ASSIGNED_BY_ID]=1&fields[TITLE]=Заявка с САЙТА`

  return link
}
