import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/packages/ui/components';
import { priceFormatter } from '@/packages/strings/price-formatter';

interface MostCommonCategoryCardProps {
  averagePrice: number;
}

export const AveragePriceCard = ({ averagePrice }: MostCommonCategoryCardProps) => {
  return (
    <Card className="w-full max-w-sm gap-3">
      <CardHeader>
        <div className="flex items-center">
          <div className="p-2 rounded-lg">
            <TrendingUp className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">Average Price</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-2xl font-bold text-primary">{priceFormatter(averagePrice)}</p>
          <p className="text-xs text-muted-foreground">Based on all products</p>
        </div>
      </CardContent>
    </Card>
  );
};
