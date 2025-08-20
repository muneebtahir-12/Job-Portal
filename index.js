        document.querySelector('.offers select').addEventListener('change', function() {
            const selectedValue = this.value;
            document.querySelectorAll('.front-end').forEach(function(frontEnd) {
                frontEnd.style.display = 'none';
                if (frontEnd.classList.contains(selectedValue)) {
                    frontEnd.style.display = 'flex';
                }
                if (selectedValue === 'all') {
                    frontEnd.style.display = 'flex';
                }
            });
        });