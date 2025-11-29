import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { EventBanner } from '@/types';

interface EventBannerProps {
  banner: EventBanner;
}

const EventBannerComponent: React.FC<EventBannerProps> = ({ banner }) => {
    if (!banner.isActive) return null;

    return null;
};

export default EventBannerComponent;
