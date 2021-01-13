import {FC} from 'react'

import classes from './Layout.module.css'

export const Stack: FC = ({children}) => {
  return <div className={classes.stack}>{children}</div>
}

export const Columns: FC = ({children}) => {
  return <div className={classes.columns}>{children}</div>
}
