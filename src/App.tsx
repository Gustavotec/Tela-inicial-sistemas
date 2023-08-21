import { useState } from 'react'
import { EyeSlash, Eye } from 'phosphor-react'
import vertigo from './assets/logo.svg'

type PasswordType = 'password' | 'text'

export function App() {
  const [inputPasswordType, setInputPasswordType] = useState<PasswordType>('password')
  const handleTogglePasswordType = ( type: PasswordType ) => {
    switch ( type ) {
      case 'password':
        setInputPasswordType('text')
        return
      case 'text':
      default:
        setInputPasswordType('password')
        return
    }
  }
  return (
    <div className= "grid grid-cols-2 h-screen bg-gray-50">
      <div>
        <div className="py-10 px-28">
          <img src={vertigo} alt="Vertigo" />
          <main className="flex flex-col mt-28 gap-10 w-full max-w-[600px]">
            <header className="flex flex-col gap-4 w-full max-w-[350ps]">
              <h1 className="font-sans text-4xl font-bold text-gray-800">
                Sistema de Chamados
              </h1>
              <p className="font-sans font-normal text-base text-gray-600">
                Faça seu Login para registrar o seu chamado.
              </p>
            </header>
            
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                    className="font-sans font-semibold text-sm text-gray-800"
                    htmlFor="text"
                >
                  Usuário:
                </label>
                <input
                  className="px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200
                  outline-nome focus:border-purple-500"
                  type="text"
                  id="login"
                  placeholder="Digite seu usuário"
                />
              </div>
              
              <div className="flex flex-col gap-2 relative">
                <label
                    className="flex justify-between font-sans font-semibold text-sm text-gray-800"
                    htmlFor="password"
                >
                  Senha:
                  <a
                    className="text-purple-500 hover:text-purple-400 hover:underline"
                    href="#"
                  >
                    Esqueceu sua senha?
                  </a>
                </label>
                <input
                  className="px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200
                  outline-nome focus:border-purple-500"
                  type={inputPasswordType}
                  id="password"
                  placeholder="Digite sua senha"
                />
                <button
                  className="absolute right-4 top-11 text-gray-400"
                  type='button'
                  onClick={() => handleTogglePasswordType(inputPasswordType)}
                >
                  { inputPasswordType == 'password' ? <EyeSlash /> : <Eye /> }
                </button>
              </div>
              
              <footer className="flex flex-col gap-10">
                <button
                className="bg-purple-500 text-white font-bold py-4 rounded outline-none hover:bg-purple-400 hover:ring-1 hover:ring-purple-500
                focus:ring-2 focus:ring-purple-400"
                >
                  Entrar
                </button>
                <span className="flex justify-between text-gray-600">
                  Ainda não sabe registrar um chamado?
                  <a
                    className="text-purple-500 hover:text-purple-400 hover:underline"
                    href="#">Clique aqui!
                  </a> 
                </span>
              </footer>
            </form>
            
            <h1 className="py-20 px-15">
              Desenvolvido por Luís Gustavo Cardoso
            </h1>
          
          </main>
        </div>
      </div>

      <div className='bg-img-purple bg-cover bg-no-repeat'/>
    </div>
    )
} 