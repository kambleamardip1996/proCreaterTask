$(document).ready(function () {

    // document.body.requestFullscreen();

    let footerHTML = '<div class="col-12 footer-tab p-0">' +
        '<a href="home.html"><div><img src="assets/img/home-active.png"></div></a>' +
        '<a href="local-storage.html"><div><img src="assets/img/local-storage.png"></div></a>' +
        '<a><div class="upload-menu"><img src="assets/img/upload.png"></div></a>' +
        '<a href=""><div><img src="assets/img/notification.png"></div></a>' +
        '<a href=""><div><img src="assets/img/profile.png"></div></a>' +
        '</div>' +
        '<div class="upload-menu-container">' +

        '<div class="scan-icon">' +
        '<img src="assets/img/scan-icon.png" >' +
        '<p class="font-color6">Scan</p>' +
        '</div>' +

        '<div class="photo-icon">' +
        '<img src="assets/img/photo-icon.png" class="">' +
        '<p class="font-color6">Photo</p>        ' +
        '</div>' +

        '<div class="upload-icon">' +
        '<img src="assets/img/upload-icon.png" class="">' +
        '<p class="font-color6">Upload</p>' +
        '</div>' +

        '<img src="assets/img/close-upload-icon.png" class="cancel-icon">' +
        '</div>' +
        '<div class="blackShade">&nbsp;</div>';

    $('#footerDiv').html(footerHTML);


    $(".upload-menu-container").click(function (event) {
        event.stopPropagation();
    });

    $('.blackShade').click(function () {
        if ($('.upload-menu-container').hasClass('active')) {
            $('.upload-menu-container').removeClass('active');
        }
        $('.blackShade').css('display', 'none');
    });

    $('.cancel-icon').click(function () {
        $('.upload-menu-container').removeClass('active');
        $('.blackShade').css('display', 'none');
    })

    $('.upload-menu').click(function () {
        $('.upload-menu-container').addClass('active');
        $('.blackShade').css('display', 'block');
    });

    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })


    if (window.location.pathname == '/home.html') {
        let res = {
            status: "200",
            data: {
                files: [

                ],
                folders: [
                    {
                        headOne: "The next big thing",
                        subHead: "12 f · 2.1 gb",
                        img: [
                            "assets/img/user1.jpg",
                            "assets/img/user2.jfif",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg"
                        ]
                    },
                    {
                        headOne: "Top Secret",
                        subHead: "7 f · 523 mb ",
                        img: [
                            "assets/img/user1.jpg",
                            "assets/img/user2.jfif",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg"
                        ]
                    },
                    {
                        headOne: "Freebie project",
                        subHead: "3 f · 192 mb",
                        img: [
                            "assets/img/user1.jpg",
                            "assets/img/user2.jfif",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg"
                        ]
                    },
                    {
                        headOne: "London Meetup",
                        subHead: "453 f · 1.7 gb",
                        img: [
                            "assets/img/user1.jpg",
                            "assets/img/user2.jfif",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg",
                            "assets/img/user4.jpg"
                        ]
                    },
                    {
                        headOne: "The next big thing",
                        subHead: "12 f · 2.1 gb",
                        img: [
                            "assets/img/user1.jpg"
                        ]
                    },
                    {
                        headOne: "The next big thing",
                        subHead: "12 f · 2.1 gb",
                        img: []
                    },
                ]
            }
        }

        if (res.status == "200") {
            console.log(res);
            let container = $('#folders .box-con');
            let foldersData = res.data.folders
            let AllFolderContainer = "";
            for (let i = 0; i < foldersData.length; i++) {

                let AllImgTag = "";
                for (let j = 0; j < foldersData[i].img.length; j++) {
                    if (j < 3) {
                        let EachimgTag = '<img src=' + foldersData[i].img[j] + '>'
                        AllImgTag = AllImgTag + EachimgTag;
                    }
                }

                // let Maxphotos = '<div class="max3photos">'+
                // AllImgTag+
                // '<div class="extraCount font-color1"><span>+7</span></div>'+
                // '</div>';
                var TotalImges = foldersData[i].img.length - 3;
                let count = '';
                if (TotalImges > 0) {
                    count = TotalImges;
                }
                else {
                    count = 0;
                }

                // let Counthtml = (foldersData[i].img.length == 0) ? 
                // '<p class="no-files font-color4">No Files</p>' : 
                // '<div class="extraCount font-color1"><span>'+ '\+' + count +'</span></div>';

                let Counthtml = "";
                if (foldersData[i].img.length == 0) {
                    Counthtml = '<p class="no-files font-color4">No Files</p>';
                }
                else if (foldersData[i].img.length > 0 && foldersData[i].img.length > 3) {
                    Counthtml = '<div class="extraCount font-color1"><span>' + '\+' + count + '</span></div>';
                }
                else if (foldersData[i].img.length < 3) {
                    Counthtml = '';
                }
                else {
                    Counthtml = '';
                }


                let eachFolderContainer = '<div class="folder-container">' +
                    '<p class="font-color5">' + foldersData[i].headOne + '</p>' +
                    '<p class="font-color4">' + foldersData[i].subHead + '</p>' +
                    '<img class="options" src="assets/img/more.png">' +
                    '<div class="max3photos">' +
                    AllImgTag +
                    Counthtml +
                    '</div>' +
                    '</div></div>';
                AllFolderContainer = AllFolderContainer + eachFolderContainer;
            }

            container.html(AllFolderContainer);
        }


    } else if (window.location.pathname == '/alert.php') {

    }
});