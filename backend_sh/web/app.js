(function () {
    $(document).ready(bindEvt);

    function bindEvt() {
        $(".create").click(function () {
            _onClickSubmit();
        });

        $(".delete").click(function () {
            _onClickDelete();
        });

        $(".select").click(function () {
            _onClickSelect();
        });

        $(".reset").click(function () {
            _onClickReset();
        });

        $(".selectSeq").click(function () {
            _onClickSelectSeq();
        });

        $(".update").click(function () {
            _onClickUpdate();
        })
    }

    function _onClickSubmit() {
        console.error("click create!!");

        var writer = $(".writer").val(),
            title = $(".title").val(),
            contents = $(".contents").val();

        $.ajax({
            type: 'POST',
            url: './create',
            data: { writer: writer, title: title, contents: contents } ,
            success: function (data) {
                alert("Success");
            },
            error: function () {
                alert("Error");
            }
        });
    }

    function _onClickDelete() {
        console.error("click delete!!!");

        var seq = $(".deleteSeq").val();
        $.ajax({
            type: 'GET',
            url: './delete',
            data: "seq=" + seq,
            success: function (data) {
                alert("Success");
            },
            error: function () {
                alert("Error");
            }
        });
    }

    function _onClickSelect() {
        console.error("click select!!!");

        $.ajax({
            type: 'GET',
            url: './select',
            success: function (result) {
                console.error("result : ", result);
                alert("Success");
            },
            error: function () {
                alert("Error");
            }
        });
    }

    function _onClickReset() {
        $(".writer").val("");
        $(".title").val("");
        $(".contents").val("");
    }

    function _onClickSelectSeq() {
        console.error("onClickSelect specific!!");
        var seq = $(".selectNumber").val();

        $.ajax({
            type: 'GET',
            url: './select',
            data: "seq=" + seq,
            success: function (result) {
                console.error("result : ", result);
                var resultObj = result[0];

                $(".writer").val(resultObj.writer);
                $(".title").val(resultObj.title);
                $(".contents").val(resultObj.contents);


                alert("Success");
            },
            error: function () {
                alert("Error");
            }
        });
    }

    function _onClickUpdate() {
        console.error("click update!!");

        var writer = $(".writer").val(),
            title = $(".title").val(),
            contents = $(".contents").val(),
            seq = $(".selectNumber").val();

        $.ajax({
            type: 'POST',
            url: './update',
            data: {seq: seq, writer: writer, title: title, contents: contents},
            success: function (result) {
                alert("Success");
            },
            error: function () {
                alert("Error");
            }
        });
    }
})();