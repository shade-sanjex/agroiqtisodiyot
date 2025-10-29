import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Users } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface BoardMember {
  id: string;
  name: string;
  position: string;
  order_index: number;
}

export default function EditorialBoard() {
  const [members, setMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('editorial_board')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching editorial board:', error);
    } finally {
      setLoading(false);
    }
  };

  const chiefEditor = members.find(m => m.position === 'Bosh Muharrir');
  const boardMembers = members.filter(m => m.position !== 'Bosh Muharrir');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <Users className="h-12 w-12 md:h-16 md:w-16 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Tahrir hay'ati
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                "Agroiqtisodiyot" jurnali tahrir hay'ati a'zolari
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Board Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="max-w-4xl mx-auto space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                {/* Chief Editor */}
                {chiefEditor && (
                  <div className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">
                      Bosh Muharrir:
                    </h2>
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 md:p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-base md:text-lg font-semibold">{chiefEditor.name}</p>
                    </div>
                  </div>
                )}

                {/* Board Members */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">
                    Tahrir hay'ati:
                  </h2>
                  <div className="grid gap-3 md:gap-4">
                    {boardMembers.map((member) => (
                      <div
                        key={member.id}
                        className="bg-card p-3 md:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <p className="text-sm md:text-base font-medium">{member.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
