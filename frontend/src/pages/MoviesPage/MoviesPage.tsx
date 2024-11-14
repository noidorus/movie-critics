import DefaultPageLayout from '@/shared/DefaultPageLayout/DefaultPageLayout';
import MoviesPageContent from '@/widgets/MoviesPageContent/MoviesPageContent';

export default function MoviesPage() {
    return (
        <DefaultPageLayout activeTab="movies">
            <MoviesPageContent />
        </DefaultPageLayout>
    );
}
