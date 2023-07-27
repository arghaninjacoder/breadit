import { User } from "next-auth"
import type { FC } from "react"
import Image from "next/image"
import { AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback } from "@/components/ui/Avatar"
import { Icons } from "@/components/Icons"

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="Profile Picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
export default UserAvatar