import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // Since we can't directly use the logo.png in ImageResponse,
      // we'll create a simple icon that represents your brand
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        GHF
      </div>
    ),
    {
      ...size,
    }
  )
}