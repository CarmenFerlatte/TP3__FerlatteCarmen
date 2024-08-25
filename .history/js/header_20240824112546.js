// Header and footer loading script

$(function () {
    $('#header').load('assets/php/header.html', function() {
        let navbar = document.querySelector('.bg-animated');
        if (navbar) {
            let lastScrollTop = 0;

            window.addEventListener('scroll', function () {
                let scrollTop = window.scrollY || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    // Scroll down
                    navbar.classList.add('navbar-hidden');
                } else {
                    // Scroll up
                    navbar.classList.remove('navbar-hidden');
                }

                    lastScrollTop = scrollTop;
            });
        } else {
            console.error('Navbar not found');
        }
    });
    $('#footer').load('assets/php/footer.html', function (response, status, xhr) {
        if (status === "error") {
            console.error("Erreur de chargement du pied de page: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Le pied de page a été chargé avec succès");
        }
    });
});

// Footer loading script

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extreme Footer Design</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @keyframes neon-pulse {
            0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 75px #00ffff; }
            50% { text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 37px #00ffff; }
        }

        .neon-text {
            animation: neon-pulse 1.5s infinite alternate;
        }

        .bg-animated {
            background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .glitch {
            position: relative;
        }

        .glitch::before,
        .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .glitch::before {
            left: 2px;
            text-shadow: -2px 0 #ff00de;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch::after {
            left: -2px;
            text-shadow: -2px 0 #00ffff;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
            0% { clip: rect(39px, 9999px, 71px, 0); }
            5% { clip: rect(76px, 9999px, 53px, 0); }
            10% { clip: rect(42px, 9999px, 16px, 0); }
            15% { clip: rect(94px, 9999px, 33px, 0); }
            20% { clip: rect(3px, 9999px, 5px, 0); }
            25% { clip: rect(21px, 9999px, 100px, 0); }
            30% { clip: rect(79px, 9999px, 82px, 0); }
            35% { clip: rect(56px, 9999px, 18px, 0); }
            40% { clip: rect(6px, 9999px, 38px, 0); }
            45% { clip: rect(65px, 9999px, 91px, 0); }
            50% { clip: rect(31px, 9999px, 56px, 0); }
            55% { clip: rect(88px, 9999px, 71px, 0); }
            60% { clip: rect(13px, 9999px, 43px, 0); }
            65% { clip: rect(50px, 9999px, 9px, 0); }
            70% { clip: rect(27px, 9999px, 68px, 0); }
            75% { clip: rect(85px, 9999px, 25px, 0); }
            80% { clip: rect(44px, 9999px, 93px, 0); }
            85% { clip: rect(19px, 9999px, 39px, 0); }
            90% { clip: rect(71px, 9999px, 86px, 0); }
            95% { clip: rect(2px, 9999px, 62px, 0); }
            100% { clip: rect(54px, 9999px, 47px, 0); }
        }

        .hover-3d {
            transition: transform 0.3s;
        }

        .hover-3d:hover {
            transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg);
        }

        .neon-border {
            box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff;
            animation: neon-border-pulse 1.5s infinite alternate;
        }

        @keyframes neon-border-pulse {
            0%, 100% { box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff; }
            50% { box-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff; }
        }

        .cyber-grid {
            background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            animation: cyber-grid-move 20s linear infinite;
        }

        @keyframes cyber-grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
        }
    </style>
</head>
<body class="bg-black min-h-screen flex flex-col">
    <div class="flex-grow"></div>
    <footer class="bg-animated cyber-grid relative overflow-hidden">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center md:text-left">
                    <h3 class="text-2xl font-bold text-white neon-text mb-4">CYBERLINK</h3>
                    <p class="text-cyan-300">Connecting the digital realm</p>
                </div>
                <div class="text-center">
                    <h4 class="text-xl font-bold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Services</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
                <div class="text-center md:text-right">
                    <h4 class="text-xl font-bold text-white mb-4">Stay Connected</h4>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-facebook-f text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-twitter text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-instagram text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-linkedin-in text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div class="mt-8 pt-8 border-t border-cyan-800">
                <p class="text-center text-cyan-300">&copy; 2024 CYBERLINK. All rights reserved.</p>
            </div>
        </div>
        <div class="absolute inset-0 pointer-events-none neon-border"></div>
    </footer>
</body>
</html>

