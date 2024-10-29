import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BabyIcon, CheckIcon, HeartIcon, StethoscopeIcon } from "lucide-react"
import { Button } from "../ui/button"

const Services = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Services</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            My Services 
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-start gap-y-4">
                  <HeartIcon className="size-10" />
                  <p>Parental Support</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col items-start gap-y-2 mb-6">
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Personalized borth plan creation</p>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Childbirth education classes</p>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Pregnancy wellness guidance</p>
                </li>
              </ul>
              <Button variant={"primary"} className="w-full">Learn More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-start gap-y-4">
                  <BabyIcon className="size-10" />
                  <p>Birth Doula</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col items-start gap-y-2 mb-6">
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Continious labour support</p>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Pain management techniques</p>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Partner support coaching</p>
                </li>
              </ul>
              <Button variant={"primary"} className="w-full">Learn More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-start gap-y-4">
                  <StethoscopeIcon className="size-10" />
                  <p>Postpartum Care</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col items-start gap-y-2 mb-6">
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Breastfeeding support</p>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Newborn care education</p>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-emerald-600" />
                  <p>Emotional support for new parents</p>
                </li>
              </ul>
              <Button variant={"primary"} className="w-full">Learn More</Button>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
