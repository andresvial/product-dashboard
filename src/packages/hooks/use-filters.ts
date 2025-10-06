import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setFilters = (filters: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(filters).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  const getFilter = (key: string): string | undefined => {
    return searchParams.get(key) ?? undefined;
  };

  return {
    setFilters,
    getFilter,
  };
};
