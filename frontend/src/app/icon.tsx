import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 128,
  height: 128,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7DD3FC 0%, #3B82F6 100%)',
          borderRadius: '30%',
          overflow: 'hidden',
        }}
      >
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(255,255,255,0.2)"/>
          <path d="M9 12l2 2 4-4" strokeWidth="3" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
