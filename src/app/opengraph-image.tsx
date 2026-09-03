import { ImageResponse } from 'next/og';

const width = 1200;
const height = 630;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.22), rgba(3,7,17,0.95))',
          padding: '80px',
          color: '#f8fafc',
          fontFamily: "Geist, Inter, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 18px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: '22px',
            textTransform: 'uppercase',
            letterSpacing: '10px',
            color: 'rgba(226,232,240,0.8)',
          }}
        >
          <span style={{ fontWeight: 500 }}>Society of Renewal</span>
        </div>
        <h1
          style={{
            marginTop: '36px',
            fontSize: '68px',
            fontWeight: 600,
            lineHeight: 1.05,
            maxWidth: '900px',
          }}
        >
          Building a society on dignity, not fear
        </h1>
        <p
          style={{
            marginTop: '24px',
            fontSize: '28px',
            maxWidth: '830px',
            color: 'rgba(226,232,240,0.8)',
            lineHeight: 1.4,
          }}
        >
          An open civic project testing whether care, knowledge, and material
          security can scale better than fear.
        </p>
      </div>
    ),
    {
      width,
      height,
    },
  );
}
