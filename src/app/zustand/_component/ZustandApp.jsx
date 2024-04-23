'use client';
import { create } from 'zustand'
import CodePreview from '/src/components/CodePreview'
import Details from '/src/components/Details'
import Scene from '/src/components/Scene'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

export default function ZustandApp() {
  return (
    <>
      <Scene />
      <div className="main">
        <div className="code">
          <div className="code-container">
            <CodePreview />
            <Counter />
          </div>
        </div>
        <Details />
      </div>
    </>
  )
}
