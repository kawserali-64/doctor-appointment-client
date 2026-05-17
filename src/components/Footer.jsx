import {
    Globe,
    Video,
    Play,
    Camera,
} from "lucide-react";

const FooterPage = () => {
    return (
        <footer className="bg-[#0d0f14] text-gray-400 pt-16 pb-8 px-6">

            <div className="max-w-7xl mx-auto">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    <div>
                        <h3 className="text-white font-semibold mb-4">Envato Market</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Terms</li>
                            <li>Licenses</li>
                            <li>Market API</li>
                            <li>Become an affiliate</li>
                            <li>Cookies</li>
                            <li>Cookie Settings</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Help</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Help Center</li>
                            <li>Authors</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Community</li>
                            <li>Blog</li>
                            <li>Meetups</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Meet Envato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>About Envato</li>
                            <li>Careers</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-10"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* LEFT */}
                    <div className="text-sm text-center md:text-left">

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300">
                            <span>Envato Elements</span>
                            <span>Placeit</span>
                            <span>Envato Tuts+</span>
                            <span>All Products</span>
                            <span>Sitemap</span>
                        </div>

                        <p className="mt-3 text-xs text-gray-500">
                            © 2026 Envato Pty Ltd. All rights reserved.
                        </p>

                    </div>

                    {/* RIGHT - SOCIAL (Lucide Icons) */}
                    <div className="flex gap-4 text-gray-400">

                        <Globe className="w-5 h-5 hover:text-white cursor-pointer transition" />
                        <Video className="w-5 h-5 hover:text-white cursor-pointer transition" />
                        <Play className="w-5 h-5 hover:text-white cursor-pointer transition" />
                        <Camera className="w-5 h-5 hover:text-white cursor-pointer transition" />

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default FooterPage;