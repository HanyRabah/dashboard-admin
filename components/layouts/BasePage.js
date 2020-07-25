import Header from "@/components/shared/Header";
import Aside from "../shared/Aside";
import Link from "next/link";
import Button from 'reactstrap';

const BasePage = ({ children, className = "", title, button, buttonHref }) => {
  console.log("BasePage -> buttonHref", buttonHref);
  return (
    <>
      <Aside />
      <Header />
      <main className="wrapper">
        <div className={`base-page ${className}`}>
          <header className="base-page-header">
            <h3 className="base-page-header-title">{title}</h3>
            {button && (
              <div className="base-page-header-toolbar">
                <Link href={buttonHref}>
                  <Button color="primary">{button}</Button>
                </Link>
              </div>
            )}
          </header>
          <div className="base-page-body">{children}</div>
        </div>
      </main>
    </>
  );
};

export default BasePage;
