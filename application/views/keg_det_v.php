<section class="breadcrumbs-area ptb-140 about-bg"
    style="background: rgba(0, 0, 0, 0) url('<?php echo base_url('assets/'); ?>img/bg-img/banner3.jpg') no-repeat scroll center bottom / cover;">
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
<div class="col-md-12 ">
    <div class="container">
        <div class="slideshow-container">
            <div class="row">
                <div class="col-md-8">
                    <div class="TPos LUT">Judul</div>
                    <div class="LUT fa fa-clock-o"> <?php echo date('d.m.Y');?></div>
                    <div class="LUB fa fa-user-md"> <?php echo strtoupper('paijo')?></div>
                    <div class="LUB fa fa-eye"> <?php echo '12310';?></div>
                </div>

                <!-- Full-width images with number and caption text -->
                <div class="mySlides fade">
                    <img src="<?php echo base_url('assets/'); ?>img/kegiatan/1.jpg">
                    <div class="container text">Candi umCandi umbul merupakan sebuah kolam pemandian berbentuk persegi empat yang dibuat dari batu-batu komponen bangunan candi kuno. Pemandian  Air Hangat Candi Umbul memilki 2 buah kolam ukuran 12,5 x 7,15 meter dan kolam ukuran 8,5 x 7 meterCandi umbul merupakan sebuah kolam pemandian berbentuk persegi empat yang dibuat dari batu-batu komponen bangunan candi kuno. Pemandian  Air Hangat Candi Umbul memilki 2 buah kolam ukuran 12,5 x 7,15 meter dan kolam ukuran 8,5 x 7 meterCandi umbul merupakan sebuah kolam pemandian berbentuk persegi empat yang dibuat dari batu-batu komponen bangunan candi kuno. Pemandian  Air Hangat Candi Umbul memilki 2 buah kolam ukuran 12,5 x 7,15 meter dan kolam ukuran 8,5 x 7 meterbul merupakan sebuah kolam pemandian berbentuk persegi empat yang dibuat dari batu-batu komponen bangunan candi kuno. Pemandian  Air Hangat Candi Umbul memilki 2 buah kolam ukuran 12,5 x 7,15 meter dan kolam ukuran 8,5 x 7 meter</div>
                </div>

                <div class="mySlides fade">
                    <img src="<?php echo base_url('assets/'); ?>img/kegiatan/2.jpg" style="width:100%">
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade">
                    <img src="<?php echo base_url('assets/'); ?>img/kegiatan/3.jpg" style="width:100%">
                    <div class="text">Caption Three</div>
                </div>

                <!-- Next and previous buttons -->
                <a class="prev" onclick="plusSlides(-1, 'text-resp')">❮</a>
                <a class="next" onclick="plusSlides(1), 'text-resp'">❯</a>
            </div>
        </div>
        <div class="pos">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>

    <!-- The dots/circles -->

</div>

