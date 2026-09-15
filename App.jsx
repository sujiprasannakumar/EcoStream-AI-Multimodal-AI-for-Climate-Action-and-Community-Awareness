import React, { useEffect, useState } from 'react'

const API = 'http://localhost:5000/api'

export default function App() {
  const [climate, setClimate] = useState(null)
  const [topic, setTopic] = useState('air quality')
  const [campaign, setCampaign] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${API}/climate`)
      .then(r => r.json())
      .then(setClimate)
      .catch(() => setClimate({ error: 'Start the Flask backend first.' }))
  }, [])

  async function createCampaign() {
    setLoading(true)
    try {
      const response = await fetch(`${API}/campaign`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({topic, audience: 'local citizens'})
      })
      setCampaign(await response.json())
    } catch {
      setCampaign({error: 'Unable to connect to backend.'})
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <header>
        <div className="brand">🌿 EcoStream AI</div>
        <span>Climate Data → AI Insights → Community Action</span>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">RESPONSIBLE AI FOR SUSTAINABILITY</p>
          <h1>Turn climate data into <em>real change.</em></h1>
          <p>Understand environmental conditions and create clear, community-friendly awareness campaigns.</p>
          <button onClick={createCampaign}>Generate campaign →</button>
        </div>
        <div className="hero-card">
          <div className="sun">☀️</div>
          <h3>Cleaner cities start with informed communities.</h3>
          <p>Prototype environment · Sample values</p>
        </div>
      </section>

      <section>
        <h2>Live Environmental Overview</h2>
        {climate?.error ? <p>{climate.error}</p> : (
          <div className="metrics">
            {[
              ['Air Quality', climate?.aqi ?? '—', 'AQI'],
              ['PM2.5', climate?.pm25 ?? '—', 'µg/m³'],
              ['Temperature', climate?.temperature_c ?? '—', '°C'],
              ['Humidity', climate?.humidity_percent ?? '—', '%'],
              ['Waste Segregation', climate?.waste_segregation_percent ?? '—', '%'],
              ['Carbon Change', climate?.carbon_change_percent ?? '—', '%']
            ].map(([name, value, unit]) => (
              <article className="metric" key={name}>
                <span>{name}</span><strong>{value}</strong><small>{unit}</small>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="generator">
        <h2>AI Campaign Generator</h2>
        <p>Select a climate topic and create a draft awareness campaign.</p>
        <select value={topic} onChange={e => setTopic(e.target.value)}>
          <option>air quality</option>
          <option>waste management</option>
          <option>heat awareness</option>
          <option>climate action</option>
        </select>
        <button onClick={createCampaign} disabled={loading}>
          {loading ? 'Generating...' : 'Generate with AI'}
        </button>
        {campaign && (
          <div className="campaign">
            <h3>{campaign.title}</h3>
            <p>{campaign.script}</p>
            <h4>Practical actions</h4>
            <ul>{(campaign.actions || []).map(a => <li key={a}>{a}</li>)}</ul>
            <small>Generation mode: {campaign.mode}</small>
          </div>
        )}
      </section>

      <footer>EcoStream AI · SDG 11 · SDG 13 · Educational prototype</footer>
    </main>
  )
}
