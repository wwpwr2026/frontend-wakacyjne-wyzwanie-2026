import { Sun } from 'lucide-react'
import './App.css'

import ProjectCard from './ProjectCard.tsx'

import angular from './assets/angular.jpg'
import arm from './assets/arm.svg'
import astro from './assets/astro.jpg'
import babel from './assets/babel.png'
import chatgpt from './assets/chatgpt.svg'
import csharp from './assets/csharp.svg'
import css from './assets/css.svg'
import discord from './assets/discord.svg'
import edge from './assets/edge.svg'
import eslint from './assets/eslint.svg'
import flash from './assets/flash.png'
import git from './assets/git.svg'
import github from './assets/github.svg'
import go from './assets/go.png'
import google from './assets/google.svg'
import html from './assets/html.svg'
import java from './assets/java.png'
import minecraft from './assets/minecraft.svg'
import jquery from './assets/jquery.svg'
import js from './assets/js.svg'
import linux from './assets/linux.jpg'
import lucide from './assets/lucide.png'
import markdown from './assets/markdown.svg'
import milk from './assets/milk.png'
import nextjs from './assets/nextjs.webp'
import node from './assets/node.svg'
import npm from './assets/npm.svg'
import numpy from './assets/numpy.png'
import php from './assets/php.svg'
import poo from './assets/poo.webp'
import preact from './assets/preact.png'
import protobuf from './assets/protobuf.png'
import python from './assets/python.webp'
import react from './assets/react.svg'
import rust from './assets/rust.png'
import silverlight from './assets/silverlight.webp'
import solid from './assets/solid.png'
import solvro from './assets/solvro.webp'
import stackoverflow from './assets/stackoverflow.svg'
import svelte from './assets/svelte.svg'
import tailwind from './assets/tailwind.svg'
import typescript from './assets/typescript.svg'
import vite from './assets/vite.svg'
import vscode from './assets/vscode.svg'
import vue from './assets/vue.svg'
import wasm from './assets/wasm.png'
import webpack from './assets/webpack.png'
import wordpress from './assets/wordpress.svg'
import tex from './assets/tex.webp'
import latex from './assets/latex.svg'


function App() {
  
    return (
    <>
        <header className="bg-sky-50 text-center my-24 p-12 rounded-3xl mx-auto max-w-screen-lg">
            <h1 className="text-4xl font-bold mb-8">Witamy w "Wakacyjnym wyzwaniu" <Sun className='inline-block size-12 text-yellow-400' /></h1>
            <p className="text-gray-600 text-lg">Sprawdź <span className='underline font-bold'>README.md</span> i zobacz co dla ciebie przygotowaliśmy</p>
        </header>
        <main className='flex justify-center items-center text-center py-16 px-8'>
            <section className='flex flex-col justify-center items-center border border-gray-200 rounded-lg p-16 shadow-sm w-full max-w-3xl'>
                <ProjectCard 
                    title='Wykład 1'
                    description='Wizytówka na pierwszy wykład' 
                    technologies={[
                        {id: "react", name: "React", imageSrc: react},
                        {id: "vite", name: "Vite", imageSrc: vite},
                        {id: "js", name: "JavaScript", imageSrc: js},
                        {id: "html", name: "HTML 5", imageSrc: html},
                        {id: "css", name: "CSS", imageSrc: css},
                        {id: "tailwind", name: "Tailwind", imageSrc: tailwind},
                        {id: "lucide", name: "Lucide", imageSrc: lucide},
                        {id: "node", name: "NodeJS", imageSrc: node},
                        {id: "npm", name: "Malware installer", imageSrc: npm},
                        
                        {id: "git", name: "Git", imageSrc: git},
                        {id: "discord", name: "Discord", imageSrc: discord},
                        {id: "solvro", name: "Solvro ❤️", imageSrc: solvro},
                        
                        {id: "eslint", name: "eslint", imageSrc: eslint},
                        {id: "vscode", name: "MScode", imageSrc: vscode},
                        
                        {id: "preact", name: "React lite", imageSrc: preact},
                        {id: "vue", name: "Current thing", imageSrc: vue},
                        {id: "svelte", name: "More current current thing", imageSrc: svelte},
                        {id: "nextjs", name: "PHP", imageSrc: nextjs},
                        {id: "angular", name: "Not so current current thing", imageSrc: angular},
                        {id: "astro", name: "Wait, there is another?", imageSrc: astro},
                        {id: "solid", name: "Even more?", imageSrc: solid},
                        {id: "jquery", name: "Remember me?", imageSrc: jquery},
                        {id: "wordpress", name: "And me?", imageSrc: wordpress},

                        {id: "webpack", name: "this thing", imageSrc: webpack},
                        {id: "poo", name: "Electron", imageSrc: poo},
                        {id: "babel", name: "[Rdz 11]", imageSrc: babel},
                        {id: "wasm", name: "The real C killer", imageSrc: wasm},

                        {id: "php", name: "Next.js", imageSrc: php},
                        {id: "flash", name: "RIP Flash", imageSrc: flash},
                        
                        {id: "java", name: "3 billion devices used to live here. Now it's a ghost town.", imageSrc: java},
                        {id: "minecraft", name: "Java", imageSrc: minecraft},
                        {id: "go", name: "Garbage collector", imageSrc: go},
                        {id: "rust", name: "Blazingly 🔥 fast 🚀 💯% safe 🛡️ C killer 🔪 🩸 language of the future 🤖", imageSrc: rust},
                        {id: "protobuf", name: "Linking flags will continue until compilation improves ;)", imageSrc: protobuf},
                        {id: "numpy", name: "Fortran", imageSrc: numpy},
                        {id: "python", name: " LAPACK command line interface", imageSrc: python},
                        

                        {id: "tex", name: "Tex", imageSrc: tex},
                        {id: "latex", name: "Tex++", imageSrc: latex},
                        {id: "markdown", name: "Tex--", imageSrc: markdown},

                        {id: "arm", name: "TikTok runtime environment", imageSrc: arm},
                        {id: "linux", name: "Linux. I mean GNU/Linux. I mean GNU+Linux.", imageSrc: linux},

                        {id: "google", name: "Google", imageSrc: google},
                        {id: "stackoverflow", name: "Google", imageSrc: stackoverflow},
                        {id: "chatgpt", name: "Google", imageSrc: chatgpt},

                        {id: "typescript", name: "Microsoft JS", imageSrc: typescript},
                        {id: "github", name: "Microsoft Git", imageSrc: github},
                        {id: "csharp", name: "Microsoft Java", imageSrc: csharp},
                        {id: "silverlight", name: "Microsoft Flash", imageSrc: silverlight},
                        {id: "edge", name: "Microsoft Chromium", imageSrc: edge},
                        
                        {id: "milk", name: "And today's sponsor - milk. Drink milk. ", imageSrc: milk},
                ]}/>
            </section>
        </main>
    </>
  )
}

export default App
