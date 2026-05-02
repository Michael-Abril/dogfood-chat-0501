'use client'
import { useState, useRef, useEffect } from 'react'

interface Message { id: number; user: string; text: string; time: string }

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: 'System', text: 'Welcome to Dogfood Chat! Type a message below.', time: new Date().toLocaleTimeString() }
  ])
  const [input, setInput] = useState('')
  const [user] = useState('Guest' + Math.floor(Math.random() * 1000))
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  function send() {
    if (!input.trim()) return
    setMessages(m => [...m, { id: Date.now(), user, text: input.trim(), time: new Date().toLocaleTimeString() }])
    setInput('')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
      <header style={{ padding: '16px 0', borderBottom: '1px solid #333' }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>Chat App</h1>
        <p style={{ margin: '4px 0 0', fontSize: 13, color: '#888' }}>Logged in as <strong>{user}</strong></p>
      </header>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: 12 }}>
            <span style={{ fontWeight: 600, color: '#7c8cf8' }}>{m.user}</span>
            <span style={{ fontSize: 11, color: '#555', marginLeft: 8 }}>{m.time}</span>
            <p style={{ margin: '4px 0 0' }}>{m.text}</p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div style={{ display: 'flex', gap: 8, padding: '16px 0', borderTop: '1px solid #333' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Type a message..."
          style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid #333', background: '#1a1a1a', color: '#fff', fontSize: 14 }}
        />
        <button onClick={send} style={{ padding: '10px 20px', borderRadius: 8, background: '#7c8cf8', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
          Send
        </button>
      </div>
    </div>
  )
}
