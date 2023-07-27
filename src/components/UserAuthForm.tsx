"use client"

import { useState, type FC } from "react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/Button"
import { cn } from "@/src/lib/utils"
import { Icons } from "@/components/Icons"
import { useToast } from "@/hooks/use-toast"

interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn("google")
    } catch (error) {
      // toast notification
      toast({
        title: "There was a problem",
        description: "There was an error login with Google",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        disabled={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}
export default UserAuthForm
