import { Configuration, PublicClientApplication, SilentRequest } from '@azure/msal-browser'

const azureConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID as string,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID as string}`,
  },
}

export const msalInstance = new PublicClientApplication(azureConfig)

export const getToken = async (): Promise<string> => {
  const account = msalInstance.getAllAccounts()
  if (account.length === 0) {
    return ''
  }

  const request: SilentRequest = {
    scopes: ['User.Read'],
    account: account[0],
  }

  const response = await msalInstance.acquireTokenSilent(request)
  return response.accessToken
}
