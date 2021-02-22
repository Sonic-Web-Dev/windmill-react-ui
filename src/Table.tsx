import classNames from 'classnames'
import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, Props>(function Table(props, ref) {
  const { children, className, ...other } = props

  const {
    theme: { table },
  } = useContext(ThemeContext)

  const baseStyle = table.base

  const cls = classNames(baseStyle, className)
  return (
    <table className={cls} ref={ref} {...other}>
      {children}
    </table>
  )
})

export default Table
