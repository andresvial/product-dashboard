import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/packages/ui/components';

interface PopularCategoryCardProps {
  category: string;
}

export const PopularCategoryCard = ({ category }: PopularCategoryCardProps) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Card className="w-full max-w-sm gap-3">
      <CardHeader>
        <div className="flex items-center">
          <div className="p-2 rounded-lg">
            <TrendingUp className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">Most Popular Category</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-2xl font-bold text-primary">{capitalizedCategory}</p>
          <p className="text-xs text-muted-foreground">Based on recent sales data</p>
        </div>
      </CardContent>
    </Card>
  );
};
