export interface BreadCrumbsProps{
  history: any
  location: {
    pathname: string
  }
}

export interface Customer{
  id: string,
  name: string,
  country: string,
  email: string,
  phone: string
}