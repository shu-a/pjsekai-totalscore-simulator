export interface InfKeyValue {
  [key: string]: string | number
}

export interface InfMakeProps {
  sx: any
  id: string | number
}

export interface InfMakePropsTitle extends InfMakeProps {
  title: string
}