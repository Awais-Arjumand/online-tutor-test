export interface BlogPost {
    id: string;
    imageUrl: string;
    category: string;
    isSticky: boolean;
    author: string;
    date: string;
    title: string;
  }
  
  export interface BlogCardProps {
    post: {
      id: string;
      imageUrl: string;
      category: string;
      isSticky: boolean;
      author: string;
      date: string;
      title: string;
    };
    onReadMore?: (id: string) => void;
  }
  
  export interface CategoryTagProps {
    category: string;
  }
  
  export interface PostMetaProps {
    isSticky: boolean;
    author: string;
    date: string;
  }
  
  export interface ReadMoreButtonProps {
    onClick?: () => void;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export interface BlogGridProps {
    posts: BlogPost[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  