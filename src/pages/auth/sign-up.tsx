import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { registerRestaurant } from '@/api/register-restaurant'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })

      toast.success('Restaurant successfully registered!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        }
      })
    } catch {
      toast.error('Error registering restaurant.')
    }
  }

  return (
    <>
      <Helmet title='SignUp' />
      <div className='p-8'>
        <Button variant='ghost' asChild className='absolute right-8 top-8'>
          <Link to='/sign-in' className=''>
            Log in
          </Link>
        </Button>

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Create a free account</h1>
            <p className='text-sm text-muted-foreground'>Join as a partner and start selling today!</p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='restaurantName'>Business name</Label>
              <Input id='restaurantName' type='text' {...register('restaurantName')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='managerName'>Your name</Label>
              <Input id='managerName' type='text' {...register('managerName')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email address</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone number</Label>
              <Input id='phone' type='tel' {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className='w-full' type='submit'>Finish sign-up</Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              By continuing, you agree to our{' '}<a className='underline underline-offset-4' href=''>Terms of Service</a>{' '}and{' '}<a className='underline underline-offset-4' href=''>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}