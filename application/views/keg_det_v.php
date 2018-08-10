<section class="breadcrumbs-area ptb-140 about-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title"><?php echo $title; ?></h2>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Slideshow container -->
<div>
    <div class="col-md-8">
            <h1 class="TPos">Judul Berita</h1>
    </div>

    <div class="col-md-12 BPPos">
        <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="<?php echo base_url('assets/'); ?>img/slider/4.jpg">
                <div class="text">Caption Text</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="<?php echo base_url('assets/'); ?>img/slider/2.jpg" style="width:100%">
                <div class="text">Caption Two</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="<?php echo base_url('assets/'); ?>img/slider/2.jpg" style="width:100%">
                <div class="text">Caption Three</div>
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <!-- The dots/circles -->
        <div class="pos">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>
</div>