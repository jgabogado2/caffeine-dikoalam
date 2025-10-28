import { useState, useEffect } from 'react'
import { MapPin, Star, Calendar, Music } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

export default function TugtogApp() {
  const [events, setEvents] = useState([
    { id: 1, name: 'OPM Nights at SaGuijo', genre: 'Indie Rock', date: 'Oct 30, 2025', location: 'Makati City', rating: 4.8 },
    { id: 2, name: 'Lo-Fi Lounge by Clara Benin', genre: 'Acoustic', date: 'Oct 29, 2025', location: 'Cubao Expo, QC', rating: 4.6 },
    { id: 3, name: 'Punk’d Up Manila', genre: 'Punk', date: 'Nov 2, 2025', location: 'Poblacion, Makati', rating: 4.3 }
  ])

  const [search, setSearch] = useState('')

  const filteredEvents = events.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-100 p-6">
      <motion.h1 className="text-4xl font-bold mb-4 text-rose-700" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Tugtog PH 🎶
      </motion.h1>
      <p className="text-gray-700 mb-6">Discover local gigs, rate your experiences, and vibe with the Filipino music scene.</p>

      <div className="flex gap-2 mb-6">
        <Input placeholder="Search for gigs or bands..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button>Search</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map(event => (
          <motion.div key={event.id} whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-rose-700 flex items-center gap-2"><Music size={18} /> {event.name}</h2>
                  <span className="flex items-center text-yellow-500"><Star size={16} className="mr-1" /> {event.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.genre}</p>
                <div className="flex items-center text-gray-600 mt-3 gap-2">
                  <Calendar size={16} /> <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1 gap-2">
                  <MapPin size={16} /> <span>{event.location}</span>
                </div>
                <Button className="mt-4 w-full bg-rose-600 hover:bg-rose-700 text-white">View Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
