import Link from "next/link"

const { Button } = require("reactstrap")

const BasePage = ({children, className = "", title, button, buttonHref}) => {
  return (
    <div className={`base-page ${className}`}>
      <header className="base-page-header">
          <h3 className="base-page-header-title">{title}</h3>
          {button && 
            <div className="base-page-header-toolbar">
              <Link href={buttonHref}><Button color="primary" >{button}</Button></Link>
            </div>
          }
      </header>
      <div className="base-page-body">
        {children}
      </div>
    </div>
  )
}

export default BasePage
