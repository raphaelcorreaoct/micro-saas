"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function MyAccount() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    subscriptionPlan: "Pro",
    company: "Acme Inc.",
    role: "Manager",
    twoFactorEnabled: true,
    lastLogin: "2023-05-15T10:30:00Z",
    accountCreated: "2023-01-01T00:00:00Z"
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setUser({ ...user, subscriptionPlan: value })
  }

  const handleSwitchChange = (checked: boolean) => {
    setUser({ ...user, twoFactorEnabled: checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically send the updated user data to your backend
    console.log("Updated user data:", user)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subscriptionPlan">Subscription Plan</Label>
              <Select
                value={user.subscriptionPlan}
                onValueChange={handleSelectChange}
                disabled={!isEditing}
              >
                <SelectTrigger id="subscriptionPlan">
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Free">Free</SelectItem>
                  <SelectItem value="Pro">Pro</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={user.company}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                name="role"
                value={user.role}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twoFactorEnabled">Two-Factor Authentication</Label>
              <div className="flex items-center space-x-2">
                <Switch
                  id="twoFactorEnabled"
                  checked={user.twoFactorEnabled}
                  onCheckedChange={handleSwitchChange}
                  disabled={!isEditing}
                />
                <Label htmlFor="twoFactorEnabled">
                  {user.twoFactorEnabled ? "Enabled" : "Disabled"}
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Last Login</Label>
              <p className="text-sm text-gray-500">
                {new Date(user.lastLogin).toLocaleString()}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Account Created</Label>
              <p className="text-sm text-gray-500">
                {new Date(user.accountCreated).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            {isEditing ? (
              <>
                <Button type="submit" variant="default">Save Changes</Button>
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              </>
            ) : (
              <Button type="button" onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}