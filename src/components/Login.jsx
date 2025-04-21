import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remenberMe, setRemenberMe] = useState(false)

    const signIn = (e) => {
        e.preventDefault()
        console.log("VAMOOOS", { email, password, remenberMe })
        // Aquí va tu lógica de autenticación
    }

    return (
        <section className='bg-gray-50 dark:bg-gray-900 font-mono font-bold flex items-center justify-center min-h-screen'>
            <div className='px-6 py-8 mx-auto flex flex-col items-start ring-2 ring-gray-300 rounded-sm bg-white'>
                <h1 className='text-2xl text-gray-900 dark:text-white mb-4'>Inicia sesión con tu cuenta</h1>
                <form onSubmit={signIn} className='space-y-4 flex flex-col items-start w-full'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="email" className='mb-2 text-sm text-gray-900 dark:text-white'>Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            autoComplete='username'
                            placeholder='example@email.com'
                            onChange={(e) => setEmail(e.target.value)}
                            className='ring-2 ring-emerald-500 rounded-md p-2 w-full focus:ring-emerald-600 transition-normal ease-in-out duration-300'
                            required
                        />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor="password" className='mb-2 text-sm text-gray-900 dark:text-white'>Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            autoComplete='new-password'
                            placeholder='···········'
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 border-emerald-500 rounded-md p-2 w-full focus:ring-emerald-600 transition-normal ease-in-out duration-300'
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                                id="remember" 
                                aria-describedby="remember" 
                                type="checkbox" 
                                onChange={(e) => setRemenberMe(e.target.checked)}
                                required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recuerdame</label>
                          </div>
                      </div>
                      <a href="/forgot" className="text-sm ml-20 text-emerald-600 hover:text-emerald-400 transition-normal ease-in-out duration-300">¿Olvidaste la contraseña?</a>
                  </div>

                    <button type="submit" className='mt-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-500 transition-normal ease-in-out duration-300'>
                        Iniciar sesión
                    </button>

                    <div className='text-sm'>
                        ¿No tienes cuenta aún? <a href="/register" className='text-emerald-600 hover:text-emerald-400 transition-normal ease-in-out duration-300'>Registrate</a>
                    </div>
                </form>
            </div>
        </section>
    )
}
