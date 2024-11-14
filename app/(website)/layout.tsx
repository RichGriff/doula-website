import Header from "@/components/website/header"
import { ReactNode } from "react"


const WebsiteLayout = ({ children } : { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      {/* Footer */}
    </>
  )
}

export default WebsiteLayout
